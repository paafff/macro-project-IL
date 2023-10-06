import React from 'react';
import Layout from './Layout';
import Heading from '../components/Heading';
import Card from '../components/Card';
import Collapse from '../components/Collapse';
import Disclosure from '../components/Disclosure';

const Coba = () => {
  return (
    <Layout>
      {/* <Heading /> */}
      {/* <Card /> */}
      {/* <Collapse /> */}
      <Disclosure />

      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <a
          href="#"
          className="font-display max-w-sm text-2xl font-bold leading-tight"
        >
          <span
            className="capitalize
                inline-block
                text-3xl
                relative
                cursor-pointer
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-0
                before:w-0
                before:h-1.5
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-gray-600
                before:via-slate-400
                before:to-zinc-500
                hover:before:w-full
                hover:before:opacity-100"
          >
            {' '}
            Hover to See the Effect{' '}
          </span>
        </a>
        <br />
        <br />
        <a
          href="#"
          className="font-display max-w-sm text-2xl font-bold leading-tight"
        >
          <span className="link link-underline link-underline-black text-black">
            {' '}
            Multi line text will <br />
            work fine too.
          </span>
        </a>
      </div>
    </Layout>
  );
};

export default Coba;
