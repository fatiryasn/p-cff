import Image from "next/image";
import heroBg from "../public/hero.png";
import logo from "../public/logo.png";
import product from "../public/product.jpg";
import kebun from "../public/kebun.png";
import ppl from "../public/ppl.png";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* sect 1 (hero) */}
      <main className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <Image
          src={heroBg}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />

        {/* Overlay untuk gelap transparan */}
        <div className="absolute inset-0 bg-black/65 z-10"></div>

        {/* Content */}
        <div className="relative z-20 h-full flex flex-col justify-center items-start px-8 md:px-32 text-white">
          <Image
            src={logo}
            alt="PorluCoffee"
            width={80}
            height={80}
            className="mb-4 rounded-full bg-white "
          />

          <h1 className="text-2xl font-poppins md:text-6xl font-extrabold mb-4 leading-tight drop-shadow">
            Crafted Coffee Beans,
            <br />
            <span className="text-green-400">Pure Experience</span>
          </h1>

          <p className="text-lg md:text-xl font-quicksand text-gray-100 max-w-2xl mb-8">
            PorluCoffe menawarkan biji kopi pilihan yang disangrai dengan
            presisi. Ciptakan pengalaman seduh yang istimewa di setiap rumah,
            kedai, atau di mana pun Anda menikmati kopi.
          </p>

          <Link href={"/products"}>
            <button className="bg-green-600 hover:bg-green-700 transition px-6 py-3 cursor-pointer rounded-full font-semibold text-white shadow-lg">
              Lihat Produk Kami
            </button>
          </Link>
        </div>
      </main>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#3c8a2f"
          fillOpacity="1"
          d="M0,192L48,186.7C96,181,192,171,288,170.7C384,171,480,181,576,208C672,235,768,277,864,272C960,267,1056,213,1152,192C1248,171,1344,181,1392,186.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      {/* sect 2 (whys) */}
      <section className="bg-white flex justify-center gap-10 ">
        <div className="flex flex-col">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-800 mb-2">
            Why Choose PorluCoffe?
          </h2>
          <p className="text-gray-800 text-lg max-w-xl mx-auto font-quicksand">
            Kami tidak sekadar menyajikan kopi — tapi juga cerita, rasa, dan
            makna dalam setiap cangkir.
          </p>
          <Image
            src={kebun}
            alt="Kebun"
            className="self-center object-cover rounded-l-[50px] rounded-r-sm h-full w-full mt-5"
          />
        </div>

        <div className="grid grid-cols-2 gap-8 w-[50%]">
          <div className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="text-4xl text-green-700 mb-4">🌱</div>
            <h3 className="text-xl font-semibold mb-2 font-raleway">
              Sangrai Segar
            </h3>
            <p className="text-gray-800 text-sm font-quicksand">
              Semua biji kopi kami disangrai dalam batch kecil agar tetap segar
              dan nikmat.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="text-4xl text-green-700 mb-4">☕</div>
            <h3 className="text-xl font-semibold mb-2 font-raleway">
              Rasa Kaya & Berani
            </h3>
            <p className="text-gray-800 text-sm font-quicksand">
              Biji kopi pilihan kami menghadirkan rasa yang seimbang dan
              mendalam di setiap tegukan.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="text-4xl text-green-700 mb-4">🌍</div>
            <h3 className="text-xl font-semibold mb-2 font-raleway">
              Praktik Berkelanjutan
            </h3>
            <p className="text-gray-800 text-sm font-quicksand">
              Kami mendukung pertanian ramah lingkungan dan proses sumber yang
              etis.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="text-4xl text-green-700 mb-4">📦</div>
            <h3 className="text-xl font-semibold mb-2 font-raleway">
              Pengiriman Seluruh Indonesia
            </h3>
            <p className="text-gray-800 text-sm font-quicksand">
              Kopi favoritmu akan kami antar langsung ke pintu rumah, ke mana
              pun kamu berada.
            </p>
          </div>
        </div>
      </section>

      {/* sect 3 (story) */}
      <section className="bg-white flex flex-row-reverse justify-center gap-10 mt-20 px-40 pt-32 pb-10">
        <div className="w-[40%] flex flex-col">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-poppins mb-2">
            Our Story
          </h2>
          <Image
            src={ppl}
            alt="People"
            className="self-center object-cover rounded-r-[50px] rounded-l-sm h-full w-full mt-5"
          />
        </div>
        <div className="w-[60%]">
          <p className="text-gray-900 text-2xl leading-loose mb-3 font-quicksand">
            PorluCoffe lahir di dataran tinggi Doloksanggul, sebuah daerah yang
            kaya akan tradisi dan alam yang subur. Didirikan pada tahun 2025,
            kami memulai perjalanan ini dengan satu tujuan sederhana: membawa
            cita rasa kopi terbaik dari tanah kami ke seluruh penjuru Indonesia,
            bahkan dunia.
          </p>
          <p className="text-gray-900 text-2xl leading-loose font-quicksand">
            Setiap biji kopi yang kami hasilkan dipetik secara selektif dan
            diproses dengan penuh dedikasi oleh para petani lokal. Kami percaya
            bahwa secangkir kopi yang baik bukan hanya soal rasa, tapi juga
            tentang cerita, asal usul, dan cinta terhadap proses. PorluCoffee
            bukan hanya produk — ini adalah warisan yang kami banggakan.
          </p>
        </div>
      </section>

      {/* sect 4 (best of) */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#bbf7d0"
          fillOpacity="1"
          d="M0,224L120,229.3C240,235,480,245,720,245.3C960,245,1200,235,1320,229.3L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
      <section className="bg-gradient-to-b from-green-200 to-emerald-100 py-5 px-6 md:px-32">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 mb-4">
            Best of{" "}
            <span className="font-raleway text-green-800">PorluCoffe</span>
          </h2>
          <p className="text-gray-900 font-quicksand text-lg max-w-xl mx-auto">
            Pilihan terbaik untuk pecinta kopi sejati — setiap biji dipilih
            dengan cermat, demi rasa yang tak terlupakan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              img: product,
              title: "House Blend",
              desc: "Campuran biji khas kami dengan rasa seimbang — nutty, caramel, dan sedikit fruity.",
            },
            {
              img: product,
              title: "Single Origin",
              desc: "Cita rasa murni dari satu wilayah, menawarkan karakteristik khas dan unik.",
            },
            {
              img: product,
              title: "Dark Roast",
              desc: "Rasa bold dan pekat, cocok untuk espresso lovers dan pecinta kopi kuat.",
            },
            {
              img: product,
              title: "Cold Brew Pack",
              desc: "Paket khusus untuk penyeduhan dingin di rumah — praktis dan menyegarkan.",
            },
          ].map((product, index) => (
            <div
              key={index}
              className="flex bg-white rounded-2xl shadow-md hover:shadow-lg transition px-4 py-3 gap-5 border-[0.1px] border-yellow-600 items-center"
            >
              <Image
                src={product.img}
                alt={product.title}
                className="w-36 h-36 object-cover rounded-xl"
              />
              <div className=" max-w-sm">
                <h3 className="text-xl font-raleway font-semibold text-gray-800 mb-1">
                  {product.title}
                </h3>
                <p className="text-gray-900 text-sm mb-3 font-quicksand ">
                  {product.desc}
                </p>
                <p className="text-emerald-800 text-base font-semibold font-raleway">
                  RpXXX.XXX
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center items-center">
          <Link href="/products">
            <button className="text-gray-50 bg-green-800 rounded-xl hover:bg-green-900 transition cursor-pointer font-raleway font-semibold px-5 py-3">
              Lihat lebih banyak
            </button>
          </Link>
        </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#d1fae5"
          fillOpacity="1"
          d="M0,96L120,90.7C240,85,480,75,720,85.3C960,96,1200,128,1320,144L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>

      {/* sect 6 (address) */}
      <section className="bg-gray-50 pb-20 px-6 md:px-40" id="lokasi">
        <div className="flex items-center gap-5 mb-5">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-4">
            Lokasi Kami
          </h2>
          <div className="w-32 h-[3px] bg-green-700"></div>
          <p className="text-gray-900 font-quicksand text-lg max-w-lg">
            Kunjungi langsung kedai kami untuk merasakan aroma dan cita rasa
            kopi pilihan secara langsung.
          </p>
        </div>

        <div className="flex flex-row-reverse bg-emerald-200 border-[0.2px] border-green-800 p-5 rounded-xl justify-center gap-10">
          <div className="py-5">
            <Image src={logo} alt="Logo" className="h-20 w-20 bg-white rounded-full mb-2"/>
            <h3 className="text-xl font-semibold font-raleway text-gray-900 mb-1">
              PorluCoffe HQ
            </h3>
            <p className="text-gray-950 font-quicksand mb-5">
              Jl. Kopi Sejati No. 10
              <br />
              Doloksanggul, Sumatera Utara
              <br />
              Indonesia 22457
            </p>
            <p className="text-gray-950 font-quicksand">
              <strong className="font-poppins">Jam Buka:</strong>
              <br />
              Senin – Sabtu: 08.00 – 18.00
              <br />
              Minggu: Libur
            </p>
          </div>

          <div className="w-[50%] h-[30rem] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.625907250678!2d98.99129772726377!3d2.302087447339394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x302e05e1146f9e11%3A0xe6539d6a8e4019b7!2sDoloksanggul%2C%20Kabupaten%20Humbang%20Hasundutan%2C%20Sumatera%20Utara!5e0!3m2!1sen!2sid!4v1712299922222!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
