import Link from "next/link";

export default function Home() {
  const links = [
    { linkName: "MPG Landing Page 1", linkURL: "/v1/mpglandingpage1" },
    { linkName: "MPG Landing Page 2", linkURL: "/v1/mpglandingpage2" },
    { linkName: "MPG Landing Page 3", linkURL: "/v1/mpglandingpage3" },
    { linkName: "VWS", linkURL: "/v2/vws" },
  ];

  return (
    <div className="flex items-center justify-center h-screen bg-blue-100">
      <div className="grid grid-rows-2 border-indigo-800 border-4 p-5 rounded-3xl bg-black bg-opacity-10 font-bold">
        <div className="text-4xl text-indigo-800">Check below links:</div>
        <ul className="grid grid-rows-2 list-disc list-inside text-3xl text-indigo-800">
          {links.map((linkObj, key) => {
            return (
              <li key={key}>
                <Link href={linkObj?.linkURL}>{linkObj?.linkName}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
