import React from "react";
import PropTypes from 'prop-types';
import Store,{Context} from '../store/appContext.jsx';

<<<<<<< HEAD
import '../../styles/blog.css';

function BlogPost(props){
    return(

            <Context.Consumer>
                {
                  ({store}) => {
                        return(
                            store.posts.map((item, index) => {
                              return (<div>
                              <h2 key={index}>{item.title}</h2>
                              <p key={index}>{item.date} by {item.author}</p>
                              <p key={index}>{item.content.substring(0,800)}</p>
                              </div>);
                            })
                        );
                     }
                }
            </Context.Consumer>
    );
}

BlogPost.propTypes = {
    items: PropTypes.array
    
};

export default Store(BlogPost);
=======
export class Blog extends React.Component {
	render() {
		return <div className="container">;
				<div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">;
					<div class="col-md-6 px-0">;
						<h1 className="display-4 font-italic">Title of a longer featured blog post</h1>
						<p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>;
						<p className="lead mb-0"><a href="#" className="text-white font-weight-bold">Continue reading...</a></p>;
					</div>;
				</div>;
			</div>;
<div className="row mb-2">
	<div className="col-md-6">
		<div className="card flex-md-row mb-4 shadow-sm h-md-250">
		<div className="card-body d-flex flex-column align-items-start">
			<strong class="d-inline-block mb-2 text-primary">World</strong>
			<h3 className="mb-0">
			<a className="text-dark" href="#">Featured post</a>
			</h3>
			<div className="mb-1 text-muted">Nov 12</div>
			<p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
			<a href="#">Continue reading</a>
		</div>
		<svg 
		className="bd-placeholder-img card-img-right flex-auto d-none d-lg-block"
		width="200" height="250" 
		preserveAspectRatio="xMidYMid slice" 
		focusable="false" 
		role="img" a
		ria-label="Placeholder:
		Thumbnail">
		<title>Placeholder</title></svg>
		</div>
	</div>
	<div className="col-md-6">
		<div className="card flex-md-row mb-4 shadow-sm h-md-250">
			<div className="card-body d-flex flex-column align-items-start">
				<strong className="d-inline-block mb-2 text-success">Design</strong>
				<h3 className="mb-0">
				<a className="text-dark" href="#">Post title</a>
				</h3>
				<div className="mb-1 text-muted">Nov 11</div>
				<p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
				<a href="#">Continue reading</a>
			</div>
			<svg className="bd-placeholder-img card-img-right flex-auto d-none d-lg-block" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect fill="#55595c" width="100%" height="100%"></rect><text fill="#eceeef" dy=".3em" x="50%" y="50%">Thumbnail</text></svg>
		</div>
	</div>
</div>;

			<main role="main" class="container">
				<div class="row">
					<div class="col-md-8 blog-main">
						<h3 class="pb-4 mb-4 font-italic border-bottom">
							From the Firehouse
							</h3>
						<div class="blog-post">
							<h2 class="blog-post-title">Sample blog post </h2>
							<p class="blog-post-meta">
								"January 1, 2014 by "
								<a href="#">Mark</a>
							</p>
							<p>This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, images, and code are all supported.
							</p>
							<hr></hr>
							<p>
								"Cum sociis natoque penatibus et magnis"
								<a href="#">dis parturient montes</a>
								", nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum."
								</p>
								<blockquote>
									<p>
										"Curabitur blandit tempus porttitor."
										<strong>Nullam quis risus eget urna mollis</strong>
										" ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit."
										</p>
								</blockquote>
							</div>
						</div>
					</div>
				</main>;
			
					
	}
}
>>>>>>> 675cf7cdd607ae160a513488703fb9df707dcaa2
