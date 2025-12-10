export default function GoogleMap() {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/contactpage/simplemap/bg.png')",
      }}
    >
      <section className="mx-auto">
        <div className="w-full h-[250px] md:h-[450px]   overflow-hidden shadow-lg rounded-2xl">
          <iframe
            title="Prestige Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d881.033249118146!2d-81.96072772425863!3d27.959212879215364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd3b8bbb159ad5%3A0x59938e7ef0de4756!2sPolk%20County%20Bully%20Project!5e0!3m2!1sen!2sbd!4v1764137074103!5m2!1sen!2sbd"
            width="100%"
            height={450}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </section>
  );
}
