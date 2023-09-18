import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const [title, setTitle] = useState("");
  // const [post, setPost] = useState<any>();
  console.log(process.env.HTTP_ENPOINT);

  // const postData = async () => {
  //   const data = {
  //     title: title,
  //     post: post,
  //   };

  //   const response = await fetch("/api/hello", {
  //     method: "GET",
  //   });
  //   return response.json();
  // };

  // useEffect(() => {
  //   postData().then((data) => {
  //     setPost(data)
  //   });
  // },[])
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      Home
    </main>
  );
}
