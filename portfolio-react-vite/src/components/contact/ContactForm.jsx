import { useRef } from "react";
import "../../css/ContactForm.css";
function ContactForm({ setIsMessage, setIsSending, setIsSent, setIsSendingFailed}){
    const form = useRef();
    function handleOnSubmit(e){
        e.preventDefault()
        setIsMessage(true)
        setIsSending(true)
        // emailjs.sendForm('armaan_chaand_aurora', 'template_zqxh8h3', form.current, 'mjoVauzPGfpH9zh1d')
        // .then((result) => {
        //     if(result.text === "OK"){
        //         setIsSending(false)
        //         setIsSent(true)
        //         form.current.reset()
        //         setTimeout(()=>{
        //             setIsMessage(false)
        //         }, 1500)
        //     }
        // }, (error) => {
        //     console.log(error.text);
        //     setIsSent(false)
        //     setIsSendingFailed(true)
        //     setTimeout(()=>{
        //         setIsMessage(false)
        //     }, 1500)
        // });
        setTimeout(()=>{
            setIsMessage(false)
        }, 1500)
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