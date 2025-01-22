import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {profileImageSrc, description, aboutItems} = aboutData;
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.About}>
      <div className={classNames('grid grid-cols-1 gap-y-4', {'md:grid-cols-4': !!profileImageSrc})}>
        {!!profileImageSrc && (
          <div className="col-span-1 flex justify-center md:justify-start">
            <div className="relative h-24 w-24 overflow-hidden rounded-xl md:h-32 md:w-32">
              <Image alt="about-me-image" className="h-full w-full object-cover" src={profileImageSrc} />
            </div>
          </div>
        )}
        <div className={classNames('col-span-1 flex flex-col gap-y-6', {'md:col-span-3': !!profileImageSrc})}>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-bold text-white">About me</h2>
            <p className=" rose-sm text-gray-300 sm:prose-base">{description}</p>
          </div>
        </div>
      </div>
      <ul className="flex justify-center pt-10 gap-20">
            {aboutItems.map(({label, text, Icon}, idx) => (
              <li className="flex flex-col gap-4 justify-center" key={idx}>
                <div className='flex justify-center w-full'>
                  {Icon && <Icon className="h-10 w-10 text-white" />}
                </div>
                <span className="font-bold text-white flex justify-center text-xl">{label}</span>
                <span className=" text-sm text-gray-300 flex justify-center">{text}</span>
              </li>
            ))}
      </ul>
    </Section>
  );
});

About.displayName = 'About';
export default About;
