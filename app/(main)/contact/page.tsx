import React from 'react';
import SubHeader from "@/modules/layout/components/sub-header";
import ContactTemplate from "@/modules/contact/template";
import {getContact} from "@/lib/data";

const Contact = async () => {
    const contact = await getContact()
    return (
        <>
            <SubHeader title={"Contact us"} subtitle={"contact us"}/>
            <ContactTemplate contact={contact}/>
        </>
    );
};

export default Contact;