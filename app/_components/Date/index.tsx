import Image from "next/image"
import styles from "./index.module.css"
import { formatDate } from "@/app/_libs/utils"

type Props = {
  date: string;
};

export default function Date({ date }: Props){
  return (
    <span className="{styles.data}">
      <Image loading="eager" src="/clock.svg" alt="" width={16} height={16} />
      {formatDate(date)}
    </span>
  );
}