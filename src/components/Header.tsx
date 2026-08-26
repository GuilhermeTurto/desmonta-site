"use client";
import Link from "next/link";
import { useState } from "react";
import { company, whatsappUrl } from "@/config/company.config";
import { ArrowUpRight, CloseIcon, MenuIcon } from "./Icons";
import { Logo } from "./Logo";

const links = [{ href: "/#sobre", label: "Sobre" }, { href: "/servicos", label: "Serviços" }, { href: "/#como-funciona", label: "Como funciona" }, { href: "/contato", label: "Contato" }];
export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="header-inner container"><Logo /><button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-navigation" aria-label={open ? "Fechar menu" : "Abrir menu"}>{open ? <CloseIcon /> : <MenuIcon />}</button><nav id="main-navigation" className={`main-nav ${open ? "is-open" : ""}`} aria-label="Navegação principal">{links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}<Link className="client-link" href="/area-do-cliente" onClick={() => setOpen(false)}>Área do Cliente</Link></nav><a className="button button-small header-cta" href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label={`Falar com a ${company.name}`}>Falar com especialista <ArrowUpRight /></a></div></header>;
}
