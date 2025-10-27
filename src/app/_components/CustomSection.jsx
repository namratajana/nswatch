const CustomSection = ({id, children}) => {
    return (
        <section className="w-full h-full relative" id={id}>
            {children}
        </section>
    )
}
export default CustomSection
