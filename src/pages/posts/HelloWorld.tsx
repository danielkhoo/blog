import React from 'react';

export interface IProps {
  title: string;
  href: string;
  description?: string;
  date?: string;
}

const HelloWorld: React.SFC<IProps> = (props: IProps) => (
  <div className='blog-post'>

    <div className='blog-post-title'>
      <h1>{props.title}     </h1>
      <h4>{props.date}</h4>
      <hr />
    </div>



    <div className='blog-post-content'>
      <p>This blog was inspired by a great piece from swyx
        (<a href='https://www.swyx.io/writing/learn-in-public/'>Learn In Public</a>).
        It really got me thinking about my learning process as a developer. I actively consume content on
        twitter and dev blogs but never really felt like I was qualified to create.
      </p>
      <p>
        What I love about the "learn in public" atttitude is precisely that. To treat your lack of knowledge
        as a blessing and embrace making mistakes. In a world of twitter and instagram, its far too easy to
        see rockstars and prodigies effortlessly building and creating. Its easy to fall into the trap of thinking
        that you can't do better. Well you can and should.
      </p>
      <p>
        About a year ago I started (and abandoned) a ghost blog where I posted tutorials and guides on the stuff I was
        figuring out. It turned into a great resource for me to reference old work. But this time I'm going to do it a
        little different. This blog is deliberately simple with super minimal styling. A raw place to dump raw, unpolished
        widgets, helpers and wtv I happen to be working on. At least thats the plan.
      </p>

    </div>
  </div>
);

export default HelloWorld;
