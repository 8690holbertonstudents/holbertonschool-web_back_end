#!/usr/bin/env python3
"""
Module to use typed variables
"""
from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Function to return a list of tuples (object, lenght of object)
    Args:
        lst (Iterable[Sequence]): List of Sequence Object
    Returns:
        A list of tuples
    """
    return [(i, len(i)) for i in lst]
