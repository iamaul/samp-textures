import * as React from 'react';

export const Intersection = ({ onVisible }: { onVisible: Function }) => {
    const target = React.useRef() as React.MutableRefObject<HTMLDivElement>;
    const onVisibleRef = React.useRef(onVisible);

    React.useEffect(() => {
        onVisibleRef.current = onVisible;
    });

    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const isIntersecting = entries.some((e) => e.isIntersecting);

            if (isIntersecting) {
                onVisibleRef.current();
            }
        });

        observer.observe(target.current);

        return () => observer.disconnect();
    }, []);

    return <div ref={target} />;
}