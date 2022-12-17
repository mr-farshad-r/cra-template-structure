import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const Containers = (props: any) => {
    return (
        <>
            <Header />
            <main>{props.children}</main>
            <Footer />
        </>
    );
};
export default Containers;
