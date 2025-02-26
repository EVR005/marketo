import Link from "next/link";

export default function Home() {
  const links = [
    { linkName: "MPG LP 1", linkURL: "/marketo/v1/mpglandingpage1" },
    { linkName: "MPG LP 2", linkURL: "/marketo/v1/mpglandingpage2" },
    { linkName: "MPG LP 3", linkURL: "/marketo/v1/mpglandingpage3" },
    { linkName: "MPG LP 4", linkURL: "/marketo/v1/mpglandingpage4" },
    { linkName: "MPG LP 7", linkURL: "/marketo/v1/mpglandingpage7" },
    { linkName: "MPG LP 8", linkURL: "/marketo/v1/mpglandingpage8" },
    { linkName: "MPG LP 9", linkURL: "/marketo/v1/mpglandingpage9" },
    { linkName: "VWS", linkURL: "/marketo/v2/vws" },
  ];

  return (
    <div className="flex items-center justify-center h-screen bg-blue-100">
      <script
        src="https://assets.adobedtm.com/59b4ab82adc6/48200609e90b/launch-85f0fd1a20f5-development.min.js"
        async
      ></script>
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
