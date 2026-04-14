export default function Footer({ data }) {
  return (
    <section id="footer" className="bg-black py-8">
      <div className="container mx-auto px-6 text-gray-400 text-sm flex justify-between">
        <div>
          {data.first_name} — {data.title}
        </div>
        <div>
          {data.contact.email} • {data.contact.phone}
        </div>
      </div>
    </section>
  );
}
