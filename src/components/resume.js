import m from 'mithril'

const resumeDto = [
  {
    heading: 'Professional Experience',
    data: [
      {
        title: 'Sr Front End Web System Developer ',
        location: 'Empyrean Benefits Solution | Houston, Tx',
        date: 'April 2019 – Present',
        descriptions: ['Managing and working on multiple projects that include onboarding offshore and new talent and training them on how to port the legacy software into the latest framework.', 'Part of a team that is building out our first enterprise mobile application for both ios and android platforms from nativescript-vue, typescript and graphql.'],
      },
      {
        title: 'Front End Web Developer ',
        location: 'Empyrean Benefits Solution | Houston, Tx',
        date: 'August 2016 – April 2019',
        descriptions: ['Building in-house applications on demand from scratch as well as porting existing C# PHP and .NET platform/framework and other JS frameworks into one application framework using Typescript and within a functional paradigm.', 'Part of a team that built from scratch an application that needed to be able to onboard hundreds of employees from hundreds of companies that incorporated an access point for the employee, the company HR rep and also for customer service.']
      },
    ]
  },
  {
    heading: 'Education',
    data: [
      {
        title: 'Front End Web Development',
        location: 'The Iron Yard | Houston, Tx',
        date: 'February 2016 - April 2016',
        descriptions: ['Intensive 3-month course on HTML, JS and CSS with an emphasis on SOLID principles of OOP.I supplemented my learning with David J. Malan’s Harvard CS50 course as well as reading everything I can by Douglas Crockford, Alan Kay, and studying Functional Programming and Lambda-calculus through Brian Lonsdorf FP course and Bartosz Milewski category theory course. ', 'Built a fully functioning responsive Event organizer using ReactJS and mongoDB.'],
      },
      {
        title: 'PhD Human Space Exploration | Exercise Immunology (epigenetic inheritance) – Not Completed.',
        location: 'University of Houston | Houston, Tx',
        date: 'September 2011-May 2014',
        descriptions: ['NASA HRP Grant #NNX12AF04G: Studied the effects of gravitational forces on the excitability of the spinal cord.', 'Studied the effects of exercise as a modulating factor on epigenetic inheritance.']
      },
      {
        title: 'Bachelor of Science in Sports Medicine  | cum laude ',
        location: 'James Madison University | Harrisonburg, VA',
        date: 'August 2007 – May 2010',
        descriptions: ['Intensive program focused on Athletic injuries to the professional and amateur athlete.']
      },
    ]
  },
  {
    heading: 'Background',
    data: [
      {
        title: 'Tactical Firearms Instructor',
        location: 'Top Gun Range | Houston Tx',
        date: 'August 2016',
        descriptions: ['Educate public and private sector market on all aspects of gun ownership and usage.', ' Focus on tactical application with integration of armed and unarmed situations.'],
      },
      {
        title: 'PhD Research Assistant',
        location: 'University of Houston | Houston Tx',
        date: 'September 2011 - May 2014',
        descriptions: ['Taught Undergraduate science classes on Biomechanics, Statistics and health and fitness while studying the effects of spaceflight on the nervous system and the genetic effects of environmental stressors on immune function.']
      },
      {
        title: 'Israel Defense Forces, Anti-Terrorist Officer/Bodyguard.',
        location: 'Israel',
        date: 'October 2000 – December 2006',
        descriptions: ['Served as a Paratrooper in the IDF before working as anti-terrorist officer and provided close protection services for individuals and teams traveling throughout Israel.']
      },
    ]
  },
  {
    heading: 'Other Info',
    data: [
      {
        descriptions: ['Married father of one daughter, and a dog. I enjoy spending time with my family, the outdoors and my freedoms.'],
      },

    ]
  },
]


export const Resume = {
  view: ({ attrs: { mdl } }) =>
    m('#resume.w3-display-container.w3-white', { style: { height: '100%' } },
      resumeDto.map(dto => m('article',
        m('h3.sticky.w3-white', dto.heading),
        dto.data.map(data =>
          m('.', m('.w3-cell-row',
            m('.w3-mobile.w3-cell.italic', data.title),
            m('.w3-mobile.w3-cell', data.location),
            m('.w3-mobile.w3-cell', data.date)),
            m('p.w3-margin-left.indent', data.descriptions.map(description => m('p', description))))
        )
      )
      ),
      m('.w3-display-bottommiddle', m('button.w3-margin-top.w3-btn.w3-border.w3-border-red.w3-circle.w3-white', {
        onclick: () => {
          mdl.dom.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          })
        }, style: { opacity: `clamp(0,${mdl.scrollPos / 2500},1)`, position: 'relative', bottom: `${mdl.scrollPos / -1500}px` }
      }, '^'))
    )
}
