import m from 'mithril'
import { Resume } from '@/components/resume'
import { Links } from '@/components/links'
import { AnimateChildren, fadeInUp } from "@/styles"
import { Pause } from "@/Utils"

const calcSize = ({ settings: { profile } }) => {
  switch (profile) {
    case "phone":
      return { width: "200px", height: "200px" }
    case "tablet":
      return { width: "250px", height: "250px" }
    case "desktop":
      return { width: "300px", height: "300px" }
  }
}

export const Home = {
  view: ({ attrs: { mdl } }) =>
    m(
      ".w3-row.w3-display-container.overflow",
      {
        style: { height: "80vh" },
        oncreate: ({ dom }) => {
          mdl.dom = dom
          AnimateChildren(fadeInUp, Pause(0.05))({ dom })
        },
        onscroll: e => mdl.scrollPos = e.target.scrollTop
      },
      m('.w3-half.w3-container.w3-mobile.sticky',
        m("img#me.w3-block.w3-content", {
          style: {
            ...calcSize(mdl),
            transition: " all 1s ease-out;",
          },
          src: "images/me.webp",
        }),

        m(
          "a.w3-block.w3-center",

          m("p.w3-row",
            m('.w3-col', "https://boazblake.github.io/identity"),
            m('.w3-col', '347-420-3251')
          ),
          m("p",
            "Motivated - Self Driven - JS Developer"
          ),

        ),
        m(Links),

        m(
          "p.w3-block.w3-content",
          {
            style: {
              color: "black",
            },
          },
          "Front-End developer with half a decade of industry experience building a variety of different applications using a multitude of different frameworks and languages."
        ),


      ),

      m('.w3-half.w3-margin-bottom', m(Resume)),


    ),
}