import React from 'react';

const Blog = () => {




    return (
        <section className="dark:bg-gray-800 dark:text-gray-100 min-h-[70vh]">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Favorite Questions</h2>
                <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">How does prototypical inheritance work?</summary>
                        <div className="px-4 pb-4">
                            <p>Every object has an internal and hidden property called [[Prototype]] that is present in all of its methods and properties. </p>
                            <p>Prototypal Inheritance is a javascript feature that allows you to add methods and properties to objects. It's an object for an object to take on the characteristics and methods of another. We use Object.getPrototypeOf and Object.setPrototypeOf to get and set the [[Prototype]] of an object, respectively. It is now set using __proto__ in current programming languages. </p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">What are the different ways to manage a state in a React application?</summary>
                        <div className="px-4 pb-4">
                            <p>React state can be some types:</p>
                            <p>Local state , Global State. We can manage local state by using useState Ohterwise there is call contextAPI, with that we can handle state globally in our app and access within the context wrapper.</p>
                            <p>There is another option is using third party state management tool like redux , Mobx etc.</p>

                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">How will you improve the performance of a React Application? </summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>When it's necessary, keep component state local.</p>
                            <p>React components should be remembered to avoid unwanted re-renders.</p>
                            <p>Code-splitting in React using dynamic import()</p>
                            <p>Windowing or list virtualization in React</p>
                            <p >Lazy loading images in React</p>

                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts </summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>In react state is immutable, So we cannot update or replace them directly . Also react internally update state by setState function and know where to change in DOM. If we forcely update state in directly we can fall into unknown bug and react doesn't understand what to do. So keep thing what react way. :)</p>

                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">You have an array of products. Each product has a
                            name, price, description, etc. How will you
                            implement a search to find products by name? </summary>
                        <div className="card w-full shadow-xl mb-8">
                            <div className="card-body">

                                <div className="mockup-code bg-base-200 text-neutral">
                                    <pre data-prefix="1">
                                        <code>{`const products = [`}</code>
                                    </pre>
                                    <pre data-prefix="2">
                                        <code>{`    { name: "mango", price: 10, des: "sweet" },`}</code>
                                    </pre>
                                    <pre data-prefix="3">
                                        <code>{`    { name: "orange", price: 20, des: "sour" },`}</code>
                                    </pre>
                                    <pre data-prefix="4">
                                        <code>{`    { name: "apple", price: 15, des: "steet" },`}</code>
                                    </pre>
                                    <pre data-prefix="5">
                                        <code>{`];`}</code>
                                    </pre>
                                    <pre data-prefix="6">
                                        <code>{`let searchKey = "g";`}</code>
                                    </pre>
                                    <pre data-prefix="7">
                                        <code>{`const searchResult = products.filter((product) => {`}</code>
                                    </pre>
                                    <pre data-prefix="8">
                                        <code>{`    if (product.name.includes(searchKey)) {`}</code>
                                    </pre>
                                    <pre data-prefix="9">
                                        <code>{`        return product;`}</code>
                                    </pre>
                                    <pre data-prefix="10">
                                        <code>{`    }`}</code>
                                    </pre>
                                    <pre data-prefix="11">
                                        <code>{`});`}</code>
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Blog;