import Head from "./HeadOfData";
export default function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "f2e485aa-6a28-47c8-8681-be705542e01b");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
  return (
    <div className="w-[100%]">
      <Head head={"Contact"} />
      <form
        className="max-w-[600px] h-[500px] border border-sky-400 mx-auto bg-white/30 dark:bg-[#22303c]/30 backdrop-blur-[10px] mt-5 p-5 flex flex-col gap-3 justify-center rounded-md"
        onSubmit={onSubmit}
      >
        <label htmlFor="name" className='text-left'>
          <p className='text-left'>Name :{" "}</p>
          <input
            className="bg-transparent border border-sky-400 rounded-md p-1"
            type="text"
            id="name"
            name="name"
            required
          />
        </label>
        <label htmlFor="email" className='text-left'>
          <p className='text-left'>Email :{" "}</p>
          <input
            className="bg-transparent border border-sky-400 rounded-md p-1"
            type="email"
            id="email"
            name="email"
            required
          />
        </label>
        <label htmlFor="comment" className="text-left">
          Comment :
        </label>
        <textarea
          name="comment"
          id="comment"
          name="message"
          className="bg-transparent border border-sky-400 rounded-md p-1"
          rows="6"
        ></textarea>
        <button className="border border-sky-400 py-1 rounded-full">
          Submit
        </button>
      </form>
    </div>
  );
}
