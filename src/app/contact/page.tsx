import { GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { MdEmail } from "react-icons/md";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="p-5">
      <h1 className="text-primary text-2xl font-bold mb-4">Contact Me</h1>
      <p className="mb-2">You can reach me out via email at:</p>
      <a
        className="flex items-center text-lg gap-2 mb-4"
        href="mailto:rozakadm@gmail.com">
        <MdEmail />
        John@gEzample.com
      </a>
      <p className="mt-1 mb-2">or via socials below:</p>
      <div className="flex flex-col gap-2">
        <Link
          className="flex gap-2 items-center"
          href="">
          <InstagramLogoIcon />
          <b>Instagram - </b> John
        </Link>
        <Link
          className="flex gap-2 items-center"
          href="#">
          <GitHubLogoIcon />
          <b>GitHub - </b> John
        </Link>
      </div>
    </div>
  );
};

export default page;
