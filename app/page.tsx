import Image from "next/image";

export default function Home() {
  return (
      <main
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            color: "white",
            fontFamily: "Arial, sans-serif",
          }}
      >
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: 50, marginBottom: 30 }}>ddbrother.me</h1>
          <h2 style={{ fontSize: 40, fontFamily: "Brush Script MT, cursive" }}>
            Hi, I'm DDbrother!
          </h2>
          <h3 style={{ fontSize: 20, fontStyle: "italic", margin: "10px 0 50px" }}>
            EST, he/him, 16
          </h3>

          <div style={{ display: "flex", gap: 20, justifyContent: "center" }}>
            <a
                href="https://github.com/DDbrother9999"
                target="_blank"
                rel="noopener noreferrer"
            >
              <Image
                  src="github.svg"
                  alt="GitHub"
                  width={50}
                  height={50}
                  style={{
                    filter:
                        "invert(100%) sepia(0%) saturate(0%) brightness(200%) contrast(100%)",
                  }}
              />
            </a>

            <a
                href="https://discord.com/users/976447336496660500"
                target="_blank"
                rel="noopener noreferrer"
            >
              <Image
                  src="discord.svg"
                  alt="Discord"
                  width={50}
                  height={50}
                  style={{
                    filter:
                        "invert(100%) sepia(0%) saturate(0%) brightness(200%) contrast(100%)",
                  }}
              />
            </a>
          </div>
        </div>
      </main>
  );
}
