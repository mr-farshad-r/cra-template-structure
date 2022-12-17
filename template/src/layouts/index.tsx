import { Header } from "../base/Header";
import { Footer } from "../base/Footer";

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
