import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
// import Adapters from 'next-auth/providers';

const options = {
    providers: [
        Providers.Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code'
        }),
        Providers.Discord({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
            authorizationUrl: 'https://discord.com/api/oauth2/authorize?client_id=831519925615984691&redirect_uri=https%3A%2F%2Fsamp-textures.iamaul.me%2Fapi%2Fauth%2Fcallback%2Fdiscord&response_type=code&scope=identify%20email'
        }),
    ],
    // debug: process.env.NODE_ENV === 'development',
    // secret: process.env.AUTH_SECRET,
    // jwt: {
    //   secret: process.env.JWT_SECRET,
    // },
    // debug: true,
    // database: process.env.DATABASE_URL + '/sslmode=require',
    // database: {
    //     type: 'postgres',
    //     url: process.env.DATABASE_URL,
    //     ssl: true,
    //     extra: {
    //         ssl: {
    //             rejectUnauthorized: false,
    //         },
    //     },
    // },
    // adapter: Adapters.Default({
    //   type: 'pg',
    //   database: process.env.DATABASE_URL,
    //   synchronize: true,
    // }),
};

export default (req, res) => NextAuth(req, res, options);