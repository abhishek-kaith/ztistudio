import { cn } from '@/lib/utils'
import { SVGProps } from 'react'

interface LogoProps {
    className?: string
}

const Logo = (props: LogoProps) => {
    return <SvgComponent className={cn('h-8 md:h-9', props.className)} />
}

export default Logo

const SvgComponent = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 322.78 104.16"
            {...props}
        >
            <defs>
                <linearGradient
                    id="linear-gradient"
                    x1={161.82}
                    y1={71.86}
                    x2={253.48}
                    y2={71.86}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#17c0e9" />
                    <stop offset={0.43} stopColor="#c96ddd" />
                    <stop offset={0.8} stopColor="#f45162" />
                </linearGradient>
                <linearGradient
                    id="linear-gradient-2"
                    x1={159.33}
                    y1={72.71}
                    x2={255.97}
                    y2={71.02}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#17c0e9" />
                    <stop offset={0.07} stopColor="#2cb6e8" />
                    <stop offset={0.2} stopColor="#649ce4" />
                    <stop offset={0.4} stopColor="#bc73de" />
                    <stop offset={0.43} stopColor="#c96ddd" />
                    <stop offset={0.8} stopColor="#f45162" />
                </linearGradient>
                <linearGradient
                    id="linear-gradient-3"
                    x1={236.59}
                    y1={71.61}
                    x2={328.75}
                    y2={71.61}
                    xlinkHref="#linear-gradient"
                />
                <linearGradient
                    id="linear-gradient-4"
                    x1={234.09}
                    y1={71.61}
                    x2={331.25}
                    y2={71.61}
                    xlinkHref="#linear-gradient"
                />
                <linearGradient
                    id="linear-gradient-5"
                    x1={159.75}
                    y1={71.6}
                    x2={330.91}
                    y2={71.6}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#17c0e9" />
                    <stop offset={0.01} stopColor="#21bbe8" />
                    <stop offset={0.09} stopColor="#54a4e5" />
                    <stop offset={0.17} stopColor="#7e90e2" />
                    <stop offset={0.24} stopColor="#9f81e0" />
                    <stop offset={0.31} stopColor="#b676de" />
                    <stop offset={0.37} stopColor="#c46fdd" />
                    <stop offset={0.43} stopColor="#c96ddd" />
                    <stop offset={0.8} stopColor="#f45162" />
                </linearGradient>
                <style>{`.cls-1{fill: hsl(var(--foreground))}`}</style>
            </defs>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <path
                        className="cls-1"
                        d="M8.47 118.16v-16.39l61.47-72-.14 3.28-3.55-4.92 2.32 1.5H9.7V18.44h71.58v16.39l-61.61 72-.14-3.83 4.37 6.14-3.41-2.14h62.56v11.2ZM88.52 30.46v-12h74v12Zm30.32 87.7V27.73h13.39v90.43Z"
                        transform="translate(-8.47 -18.44)"
                    />
                    <path
                        d="M207.65 120.05c-25.27 0-45.83-21.62-45.83-48.19s20.56-48.18 45.83-48.18 45.83 21.61 45.83 48.18-20.56 48.19-45.83 48.19Zm0-77.72c-15.49 0-28.09 13.25-28.09 29.53s12.6 29.54 28.09 29.54 28.09-13.25 28.09-29.54-12.6-29.53-28.09-29.53Z"
                        transform="translate(-8.47 -18.44)"
                        style={{
                            fill: 'url(#linear-gradient)',
                            stroke: 'url(#linear-gradient-2)',
                            strokeMiterlimit: 10,
                            strokeWidth: 5,
                        }}
                    />
                    <path
                        d="M282.67 120.06c-25.41 0-46.08-21.73-46.08-48.45s20.67-48.44 46.08-48.44 46.08 21.73 46.08 48.44-20.67 48.45-46.08 48.45Zm0-78.14c-15.57 0-28.24 13.32-28.24 29.69s12.67 29.7 28.24 29.7 28.24-13.31 28.24-29.7-12.67-29.69-28.24-29.69Z"
                        transform="translate(-8.47 -18.44)"
                        style={{
                            fill: 'url(#linear-gradient-3)',
                            stroke: 'url(#linear-gradient-4)',
                            strokeMiterlimit: 10,
                            strokeWidth: 5,
                        }}
                    />
                    <path
                        d="M284.87 122.6h-2c-6.21-.15-11.28-.59-17-3-19-8-32.29-27.26-33-45-1-23-17-29-25-29-14-1-26 12-26 26h-22c-2-25 21-51 48-51h2c20.58 1.2 44.48 16.57 47 51 .68 9.27 5 18.84 14 24a25 25 0 0 0 19 2 25.78 25.78 0 0 0 12-8c7.22-8.25 7-14.9 7-18l22-1a50 50 0 0 1-8 30 56.78 56.78 0 0 1-10 11 44.92 44.92 0 0 1-28 11Z"
                        transform="translate(-8.47 -18.44)"
                        style={{
                            fill: 'url(#linear-gradient-5)',
                        }}
                    />
                </g>
            </g>
        </svg>
    )
}
