import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import { useTheme } from '../context/ThemeContext';
import { HexColorPicker } from 'react-colorful';

const colorOptions = [
  { value: 'emerald', label: 'Emerald', class: 'bg-emerald-500' },
  { value: 'purple', label: 'Purple', class: 'bg-purple-500' },
  { value: 'rose', label: 'Rose', class: 'bg-rose-500' },
  { value: 'amber', label: 'Amber', class: 'bg-amber-500' },
  { value: 'indigo', label: 'Indigo', class: 'bg-indigo-500' },
];

const IndexPage = () => {
  const { color, setColor } = useTheme();

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-24 sm:py-32 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-dark-text">
          Hi, I'm Neal Stanard
        </h1>
        {/* Color picker is for debugging/design purposes only */}
        {/* <div className="flex flex-col items-center space-y-4">
          <div className="flex flex-col items-center space-y-4">
            <HexColorPicker 
              color={color} 
              onChange={setColor}
              className="!w-48 !h-48"
            />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Current: {color}
            </span>
          </div>
        </div> */}
      </div>

      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-dark-text sm:text-4xl">
              About Me
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              I'm a passionate software engineer with a broad range of skills and experience in web development and modern technologies.
              I love building beautiful, responsive, and user-friendly applications that solve real-world problems.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="border-l-4 border-primary-600 pl-6">
                <h3 className="text-base font-semibold leading-7 text-gray-900 dark:text-dark-text">Skills</h3>
                <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">
                  JavaScript, TypeScript, React, CSS, HTML, AWS, GCP,{' '}
                  <Link to="/resume" className="text-primary-500 dark:text-primary-400 hover:underline">
                    and more...
                  </Link>
                </p>
              </div>

              <div className="border-l-4 border-primary-600 pl-6">
                <h3 className="text-base font-semibold leading-7 text-gray-900 dark:text-dark-text">Experience</h3>
                <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">
                  Delivering scalable web solutions and innovative applications that drive business growth and enhance user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home | Neal Stanard</title>; 