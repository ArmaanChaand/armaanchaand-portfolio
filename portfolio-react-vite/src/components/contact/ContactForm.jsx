import { useRef } from "react";
import "../../css/ContactForm.css";
function ContactForm({csrf, setIsMessage, setIsSending, setIsSent, setIsSendingFailed}){
    const form = useRef();
    function handleOnSubmit(e){
        e.preventDefault()
        setIsMessage(true)
        setIsSending(true)
        const form_data = new FormData(form.current)
        const API_URL = 'api/sendemail/'
        const OPTIONS = {
            method: "POST",
            headers: {
                'X-CSRFToken': csrf
            },
            body: form_data
        }
        fetch(API_URL, OPTIONS).then((response)=> response.json()).then((result)=>{
            console.log(result)
            setIsSending(false)
            setIsSent(true)
            setTimeout(()=>{
                setIsMessage(false)
            }, 1500)
        }).catch((err)=>{
            console.log(err)
            setIsSending(false)
            setIsSendingFailed(true)
            setTimeout(()=>{
                setIsMessage(false)
            }, 1500)
        })
       
    }
    return (
            <form ref={form} className="CONTACT" onSubmit={handleOnSubmit}>
                <div className="name-email">
                    <div className="Name">
                        <label htmlFor="Name">Name</label>
                        <input  
                            type="text"
                            name="Name"
                            id="Name"
                            className="Name"
                            required
                            autoCapitalize="off"
                            autoCorrect="off"
                            autoComplete="off"
                        />
                    </div>
                    <div className="Email">
                        <label htmlFor="Email">Email</label>
                        <input  
                            type="email"
                            name="Email"
                            id="Email"
                            className="Email"
                            required
                            autoCapitalize="off"
                            autoCorrect="off"
                            autoComplete="off"
                        />
                    </div>
                </div>
                <div className="Message">
                    <label htmlFor="Message">Message</label>
                    <textarea
                        name="Message"
                        id="Message"
                        className="Message"
                        required
                        autoCapitalize="off"
                        autoCorrect="off"
                        autoComplete="off"
                    />
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
        </form>
    )
}
export {ContactForm};