import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";

class CoursesPage extends React.Component {
  componentDidMount() {
    this.props.actions.loadCourses().catch((err) => alert(err));
  }
  render() {
    return (
      <>
        <h2>Courses</h2>
        <CourseList courses={this.props.courses} />
      </>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  courses: state.courses,
});

// determines which actions are available on props in our component
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(courseActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
