import Image from "next/image"
import styles from "./index.module.css"

type Props = {
  data: string;
};

export default function Data({ data }: Props){
  return (
    <span className="{styles.data}">
      <Image loading="eager" src="/clock.svg" alt="" width={16} height={16} />
      {data}
    </span>
  );
}