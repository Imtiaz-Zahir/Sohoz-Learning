import React from 'react';
import CourseAside from '@/components/CourseAside';

export default async function Page({ params }) {
    const data = await fetch(`http://localhost/oursite/apis/single-course.php?course=${params.courseId}`);
    const course = await data.json();
    
    const data2 = await fetch(`http://localhost/oursite/apis/learn.php?course=${params.courseId}`);
    const learn = await data2.json();

    return (
        <section className="px-0 xs:px-2 sm:px-6 lg:px-20 py-20 lg:flex lg:justify-between">
            <div className="lg:w-2/3">
                <h1 className='text-3xl font-bold my-4'>{course.title}</h1>
                <hr />
                <h2 className="my-4 text-lg font-bold mx-1">About Course</h2>
                <div className='pl-4'>{course.describtio}</div>
                <h3 className="my-4 text-lg font-bold mx-1">What Will You Learn?</h3>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-x-10 list-disc text-lg ml-8">
                    <li>{learn.attract_points}</li>
                    <li>{learn.attrack_point_t}</li>
                    <li>{learn.attrack_point_tw}</li>
                    <li>{learn.attrack_point_two}</li>
                    <li>{learn.attrack_point_th}</li>
                    <li>{learn.attrack_point_thr}</li>
                </ul>
            </div>
            <CourseAside courseId={params.courseId} duration={course.duration} price={course.price} total_sold={course.total_sold} lesson={course.lesson} lastupdate={course.lastupdate} />
        </section>
    )
}
