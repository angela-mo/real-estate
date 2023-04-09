interface Props {
    children: React.ReactNode;
    className?: string;
}

const PageWrapper = (props: Props) => {

    const {className = "" } = props;

    return (
        <div className={"w-full h-screen " + className}>
            {props.children}
        </div>
    )
}

export default PageWrapper