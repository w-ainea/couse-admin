import React, {useEffect} from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";

function ManageCoursePage({ courses, authors, loadCourses, loadAuthors }) {
  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch((err) => alert(err));
    }

    if (authors.length === 0) {
      loadAuthors().catch((err) => alert(err));
    }
  }),[];

  return (
    <>
      <h2>Manage Course</h2>
    </>
  );
}

ManageCoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  courses: state.courses,
  authors: state.authors,
});

// determines which actions are available on props in our component
const mapDispatchToProps = {
  loadCourses: courseActions.loadCourses,
  loadAuthors: authorActions.loadAuthors,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
