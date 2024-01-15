import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";


export default component$(() => {
  return (
    <>
        <p> Hello World QWIK</p>
    </>
  );
});

export const head: DocumentHead = {
  title: "Qwik Keeps",
  meta: [
    {
      name: "description",
      content: "Google keeps replica that built in quick.",
    },
  ],
};
