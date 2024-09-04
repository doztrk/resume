import React from "react";

export const ContactForm = () => {
	return (
		<form action="https://api.web3forms.com/submit" method="POST">
			<input type="hidden" name="access_key" value="c200a994-c863-43d8-92a3-3a3f89b222d5" />

			<div className="row">
				<div className="col-md-6 col-sm-6 col-xs-12">
					<div className="form-group">
						<input type="text" className="form-control" name="InputName" id="InputName" placeholder="Your Name" required="" />
					</div>
				</div>

				<div className="col-md-6 col-sm-6 col-xs-12">
					<div className="form-group">
						<input type="email" className="form-control" id="InputEmail" name="InputEmail" placeholder="Your Email" required="" />
					</div>
				</div>

				<div className="col-md-6 col-sm-6 col-xs-12">
					<div className="form-group">
						<input type="text" className="form-control" name="InputPhone" id="InputPhone" placeholder="Phone (optional)" />
					</div>
				</div>

				<div className="col-md-6 col-sm-6 col-xs-12">
					<div className="form-group">
						<input type="text" className="form-control" id="InputSubject" name="InputSubject" placeholder="Subject" />
					</div>
				</div>

				<div className="col-md-12 col-sm-12 col-xs-12">
					<div className="form-group">
						<textarea name="InputMessage" id="InputMessage" className="form-control" rows="6" placeholder="Message" required=""></textarea>
					</div>
				</div>
			</div>
			<input type="checkbox" name="botcheck" class="hidden" style={{ display: "none" }} />

			<input type="submit" name="submit" id="submit" value="Send Message" className="btn btn-default pull-left" />
		</form>
	);
};
