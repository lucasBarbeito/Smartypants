import {Meta, StoryObj} from "@storybook/react";
import TopicTranscript from "./index";

const meta: Meta<typeof TopicTranscript> ={
    title:'TopicTranscript',
    component:TopicTranscript,
    tags: ['autodocs'],
    argTypes:{

    }
}

export default meta

type Story = StoryObj<typeof TopicTranscript>

export const Default: Story = {
    render: (args) => (<TopicTranscript {...args}></TopicTranscript>
)}

Default.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim aeque doleamus animo, cum corpore dolemus, fieri tamen permagna accessio potest, si aliquod aeternum et infinitum impendere malum nobis opinemur. Quod idem licet transferre in voluptatem, ut postea variari voluptas distinguique.\n' +
        'Ullus investigandi veri, nisi inveneris, et quaerendi defatigatio turpis est, cum esset accusata et vituperata ab Hortensio. Qui liber cum et mortem contemnit, qua qui est imbutus quietus esse numquam. Ullus investigandi veri, nisi inveneris, et quaerendi defatigatio turpis est, cum esset accusata et vituperata ab Hortensio. Qui liber cum et mortem contemnit, qua qui est imbutus quietus esse numquam potest. Praeterea bona praeterita grata recordatione renovata delectant. Est autem situm in nobis ut et voluptates et dolores nasci fatemur e corporis voluptatibus et doloribus -- itaque concedo, quod modo dicebas, cadere causa, si qui incurrunt, numquam vim tantam. oajsdpoasjdpoasjdpoasjdpoasjdapsidasojaskcljlkds;vha;shvsdisaoidb;sdnvsdav  '
}
