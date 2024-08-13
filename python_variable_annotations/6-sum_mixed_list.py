#!/usr/bin/env python3
"""
Module to use typed variables
"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Function to sum a list of integers and floats
    Args:
        mxd_lst (list[Union[int, float]]): the list of integers and floats to sum
    Returns:
        The sum of the list (float type)
    """
    return sum(mxd_lst)
