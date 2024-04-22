import { useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Mail = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.send(
            'service_lfwdadq',
            'template_cqaz2nh',
            {
                from_name: form.name,
                to_name: 'Harry',
                from_email: form.email,
                to_email: "hosting4harry@gmail.com",
                message: form.message
            },
            '9Vk0P0ifs9-GHU4j2'
        ).then(() => {
            setLoading(false);
            alert('Thank you. I will get back to yo as soon as possible.');
            setForm({
                name: "",
                email: "",
                message: ""
            })
        }, (error) => {
            setLoading(false);
            console.log(error);
            alert('Something went wrong!')
        })

    }
    return (

        <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
        >
            <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your Name</span>
                <input
                    type='text'
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your name?"
                    className='bg-[#151030] py-4 px-6 placeholder:text-secondary text-white rounded-lg outlned-none border-none font-medium'
                />
            </label>
            <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your Email</span>
                <input
                    type='email'
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email?"
                    className='bg-[#151030] py-4 px-6 placeholder:text-secondary text-white rounded-lg outlned-none border-none font-medium'
                />
            </label>
            <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your Message</span>
                <textarea
                    rows={3}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What do you want to say?"
                    className='bg-[#151030] py-4 px-6 placeholder:text-secondary text-white rounded-lg outlned-none border-none font-medium'
                />
            </label>
            <button type='submit' className='bg-[#151030] py-3 px-4 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>{loading ? 'Sending...' : "Send"}</button>
        </form>

    )
}

export default Mail