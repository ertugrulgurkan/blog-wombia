import Layout from "../components/layout";

export default function AboutPage() {
  return (
    <Layout title="About Me">
      <h1 className="text-5xl border-b-4 pb-5 font-bold">About</h1>

      <div className="bg-white shadow-md rounded-lg px-10 py-6 mt-6">
        <h3 className="text-2xl mb-5">Wombia</h3>
        <p className="mb-3">This is a blog. I am Ertugrul. That is all.</p>
        {/* <p>
          <span className='font-bold'>Version 1.0.0</span>
        </p> */}
      </div>
    </Layout>
  );
}
