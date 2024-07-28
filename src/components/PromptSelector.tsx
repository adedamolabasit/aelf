import { FC } from 'react';
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';
import { DialogGetStartedflowMessenger } from './DialogGetStartedflowMessenger';

type Project = {
  name: string;
  initials: string;
  href: string;
  members: number;
  bgColor: string;
  aiModal: any
};

const projects: Project[] = [
  { name: 'Chain API', initials: 'CA', href: '#', members: 16, bgColor: 'bg-pink-600', aiModal:<DialogGetStartedflowMessenger/> },
  { name: 'Network API', initials: 'NA', href: '#', members: 12, bgColor: 'bg-purple-600', aiModal:""},
];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

export const PromptSelector: FC<any> = () => {
  return (
    <div>
      <h2 className="text-sm font-medium text-gray-500">Chat about</h2>
      <ul role="list" className="mt-3 flex flex-col gap-5">
        {projects.map((project: any) => (
          <li key={project.name} className="col-span-1 flex rounded-md shadow-sm">
            <div
              className={classNames(
                project.bgColor,
                'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white',
              )}
            >
              {project.initials}
            </div>
            <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
              <div className="flex-1 truncate px-4 py-2 text-sm">
                <a href={project.href} className="font-medium text-gray-900 hover:text-gray-600">
                  {project.name}
                </a>
                <p className="text-gray-500">{project.members} Members</p>
              </div>
              <div className="flex-shrink-0 pr-2">
                {project.aiModal}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};


