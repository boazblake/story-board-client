import m from 'mithril'
import { Header } from "@/components"


export const Layout = () => {
  return {
    view: ({ children, attrs: { mdl } }) =>
      m(
        "#app",
        // { oncreate: onscroll },
        m('.', m(Header, { mdl })),
        m('.', children),
      ),
  }
}
