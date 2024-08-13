#!/usr/bin/env python3
"""
Module to use typed variables
"""
from typing import List


def sum_list(input_list: List[float]) -> float:
    """
    Function to sum a list of floats
    Args:
        input_list (list[float]): the list of floats to sum
    Returns:
        num (float): the sum of the list
    """
    return sum(input_list)
