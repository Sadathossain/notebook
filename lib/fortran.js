"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "! Example Fortran code\n  program average\n\n  ! Read in some numbers and take the average\n  ! As written, if there are no data points, an average of zero is returned\n  ! While this may not be desired behavior, it keeps this example simple\n\n  implicit none\n\n  real, dimension(:), allocatable :: points\n  integer                         :: number_of_points\n  real                            :: average_points=0., positive_average=0., negative_average=0.\n\n  write (*,*) \"Input number of points to average:\"\n  read  (*,*) number_of_points\n\n  allocate (points(number_of_points))\n\n  write (*,*) \"Enter the points to average:\"\n  read  (*,*) points\n\n  ! Take the average by summing points and dividing by number_of_points\n  if (number_of_points > 0) average_points = sum(points) / number_of_points\n\n  ! Now form average over positive and negative points only\n  if (count(points > 0.) > 0) then\n     positive_average = sum(points, points > 0.) / count(points > 0.)\n  end if\n\n  if (count(points < 0.) > 0) then\n     negative_average = sum(points, points < 0.) / count(points < 0.)\n  end if\n\n  deallocate (points)\n\n  ! Print result to terminal\n  write (*,'(a,g12.4)') 'Average = ', average_points\n  write (*,'(a,g12.4)') 'Average of positive points = ', positive_average\n  write (*,'(a,g12.4)') 'Average of negative points = ', negative_average\n\n  end program average\n";
var _default = code;
exports.default = _default;