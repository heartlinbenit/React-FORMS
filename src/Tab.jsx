import React from 'react'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
   
   export default function Tabpage() {
     const data = [
      {
        label: "Quotes",
        value: "Quotes",
        desc: `A direct quotation is a repetition of someone's exact words, enclosed by quotation marks.`,
      },
      {
        label: "Phrases",
        value: "Phrases",
        desc: ` A phrase is a group of words that conveys a message or idea, and is an integral part of a sentence.
                Phrases can describe people, things, events, verbs, or adverbs.`,
      },
     
      {
        label: "Philosophy",
        value: "Philosophy",
        desc: ` Philosophy is a way of thinking that emphasizes clear ideas and problems, and objective methods for assessing ideas.
                        It also involves developing a sense of new directions suggested by new questions and hypotheses.
                        Philosophy can help develop communicative and expressive powers, and provides tools for presenting ideas through well-constructed arguments.`,
      },
      {
        label: "Poetry",
        value: "Poetry",
        desc: `Poetry is often associated with imagination, intuition, and vision.
                However, some say that not all poetry is philosophical.`,
      },
    ];
   
    return (
      <Tabs value="Quotes">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    );
  }