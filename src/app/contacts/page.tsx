export const metadata = {
  title: "Contacts – Jason Mora",
  description: "Contatta Jason Mora per collaborazioni e opportunità lavorative.",
};

export default function Contacts() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">Contacts</h2>
      <p>
        Email: <a href="mailto:jason.mora16@gmail.com" className="text-blue-600 underline">jason.mora16@gmail.com</a>
      </p>
      <p>
        LinkedIn: <a href="https://linkedin.com/in/jasonmora" target="_blank" className="text-blue-600 underline">linkedin.com/in/jasonmora</a>
      </p>
    </section>
  );
}
