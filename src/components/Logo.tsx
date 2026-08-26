import Image from "next/image";
import Link from "next/link";
import { sitePath } from "@/config/company.config";
export function Logo() { return <Link className="logo" href="/" aria-label="DESMONTA — Página inicial"><span className="logo-mark" aria-hidden="true"><Image src={sitePath("/images/logo-desmonta.png")} alt="" width={127} height={127} priority /></span><span className="logo-copy"><strong>DESMONTA</strong><small>reclassificação de danos</small></span></Link>; }
