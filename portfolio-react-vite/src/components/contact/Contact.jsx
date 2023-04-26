import { useEffect, useState } from "react";
import "../../css/Contact.css";
import { ContactForm } from "./ContactForm";
import { CONTACT } from "../../data/Pages";
import {TbLoader3} from "react-icons/tb";

function Contact(){
    const [contactPage, setContactPage] = useState({})
    useEffect(()=>{
        const API_URL = 'api/contact/'
        fetch(API_URL).then((response)=> response.json()).then((result)=>{
            if(result.success){
                setContactPage(result.contactData)
            } else {
                setContactPage(CONTACT)
            }
        }).catch((err)=>{
            console.log(err)
            setContactPage(CONTACT)
        })
    },[])
    const [isMessage, setIsMessage] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [isSendingFailed, setIsSendingFailed] = useState(false);
    useEffect(()=>{
        if(!isMessage){
            setIsSending(false)
            setIsSendingFailed(false)
            setIsSent(false)
        }
    }, [isMessage])
    return(
        <section className="CONTACT-PAGE">
            <h1 className="page-heading">
               {contactPage.heading}
            </h1>
            <ContactForm
                setIsMessage={setIsMessage}
                setIsSending={setIsSending}
                setIsSent={setIsSent}
                setIsSendingFailed={setIsSendingFailed}
            />
            {isMessage &&
                <div className="message">
                    {
                        isSending &&
                        <div className="sending">
                            <TbLoader3/>
                            <p>Sending</p>
                        </div>
                    }
                    {
                        isSent &&
                        <div className="sent">
                            <p>Message Sent Successfully.</p>
                        </div>
                    }
                    {
                        isSendingFailed &&
                        <div className="sent">
                            <p>Some Error Ocurred.</p>
                        </div>
                    }
                </div>
            }
        </section>
    )
}
export {Contact}