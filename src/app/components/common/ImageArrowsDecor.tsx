interface Props {
    color?: keyof typeof Colors
}

enum Colors {
    primary = '#1A4870',
    default = '#F6E8CE',
}

const ImageArrowsDecor = ({ color = 'default' }: Props) => {
    return (
        <svg width="78" height="90" viewBox="0 0 78 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M45.6097 15.2028L9.6395 24.841L35.9715 51.173L45.6097 15.2028Z" fill="#EE823D" />
            <path d="M45.8569 76.3303L57.7068 32.1057L13.4822 43.9557L45.8569 76.3303Z" stroke={Colors[color]} />
        </svg>
    )
}

export default ImageArrowsDecor