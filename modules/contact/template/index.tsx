import type {FC} from 'react';
import ContactMap from "@/modules/contact/components/map";
import ContactForm from "@/modules/contact/components/form";
import ContactInformation from "@/modules/contact/components/information";
import type {IContact} from "@/types/global";

interface IProps {
    contact: IContact;
}

const ContactTemplate: FC<IProps> = ({contact: {map, ...otherContact}}) => {
    return (
        <>
            <ContactMap src={map}/>
            <section className={"container my-20"}>
                <div className={"flex flex-wrap lg:flex-nowrap gap-x-14 justify-between"}>
                    <div className={"mb-12 sm:min-w-[400px] w-full sm:w-full"}>
                        <ContactForm/>
                    </div>
                    <ContactInformation contact={otherContact}/>
                </div>
            </section>
        </>
    );
};

export default ContactTemplate;