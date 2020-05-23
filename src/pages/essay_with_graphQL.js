import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import Strapi from 'strapi-sdk-javascript/build/main';

const apiUrl = 'http://localhost:1337';
// const apiUrl = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);

const Essays = () => {
  const [subjects, setSubjects] = useState([]);

  async function fetchData() {
    const response = await strapi.request('POST', '/graphql', {
      data: {
        query: `query {
          subjects(sort:"title"){
            id
            title
          }
        }`,
      },
    });
    setSubjects([...response.data.subjects]);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Layout>
        {/*Subjects Header */}
        <div className='flex font-bold text-xl justify-center'>
          Past California Bar Exams
        </div>
        {/*Subjects */}
        <div className='flex flex-wrap mb-4 rounded justify-center'>
          {subjects.map((subject, index) => (
            <div className='max-w-sm  shadow-md w-1/2' key={index}>
              <div className='px-6 py-4 hover:bg-gray-100'>
                <Link href='/subjects/[id]' as={`/subjects/${subject.id}`}>
                  <a>
                    <div className='font-bold text-xl px-2 hover:bg-red-700 hover:text-white rounded-full'>
                      {subject.title}
                      {subject.essays.length}{' '}
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Essays;
