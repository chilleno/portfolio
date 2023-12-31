import React, { useState, useEffect } from 'react';

let className = {
    button: {
        dark: "w-full justify-center ring-2 ring-white text-white hover:ring-4 hover:font-bold rounded-full py-2 px-3 flex gap-3 bg-black",
        light: "w-full justify-center ring-2 ring-black text-black hover:ring-4 hover:font-bold rounded-full py-2 px-3 flex gap-3 bg-white",
    }
}

interface ContactFormProps {
    darkMode: boolean;
};

const ContactForm: React.FC<ContactFormProps> = ({ darkMode }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isFormSubmitted, setFormSubmitted] = useState(false);
    const [isProcessing, setIsprocessing] = useState(true);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        setIsprocessing(true);
        event.preventDefault();
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (response.ok) {
                console.log('Form submitted successfully');
                setIsprocessing(false);
                setFormSubmitted(true);
                localStorage.setItem('formSubmitted', 'true');
            } else {
                setIsprocessing(false);
                console.error('Failed to submit form');
            }
        } catch (error) {
            setIsprocessing(false);
            console.error('Error submitting form:', error);
        }
    };

    useEffect(() => {
        if (typeof localStorage.formSubmitted !== 'undefined') {
            setFormSubmitted(localStorage.formSubmitted === "true");
        }
        setIsprocessing(false);
    }, []);


    return (
        !isFormSubmitted ?
            (
                isProcessing ?
                    <div className={"max-w-md mx-auto pt-32 px-5 justify-center items-center flex" + (darkMode ? " text-white" : " text-black")}>
                        <h1 className="font-bold text-3xl py-1" > Loading...</h1 >
                    </div>
                    :
                    <form onSubmit={handleSubmit} className="max-w-md mx-auto pt-32 text-white px-5">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-bold mb-2">
                                Name:
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                placeholder="Your name"
                                onChange={(e) => setName(e.target.value)}
                                className="shadow appearance-none border text-gray-700 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-bold mb-2">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="you@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-bold mb-2">
                                Message:
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={message}
                                placeholder="Hello, may I ask you something?"
                                onChange={(e) => setMessage(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
                                required
                            />
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className={darkMode ? className.button.dark : className.button.light}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
            )
            :
            <div className={"max-w-md mx-auto pt-32 px-5" + (darkMode ? " text-white" : " text-black")}>
                <h1 className="font-bold text-3xl py-1" > Thanks for your message!</h1 >
                <h1 className="text-md py-2">{"I'm committed to responding to you as promptly as possible. Your inquiry is important, and I appreciate your patience."}</h1>
            </div>
    );
};

export default ContactForm;