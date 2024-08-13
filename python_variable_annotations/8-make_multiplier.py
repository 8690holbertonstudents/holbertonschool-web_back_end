#!/usr/bin/env python3
"""
Module to use typed variables
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Function to create a multiplier function
    Args:
        multiplier (float): The multiplier value
    Returns:
        Callable[[float], float]: Function that multiplies a number by the multiplier
    """
    def multiply(n: float) -> float:
        """
        Inner finction to multiply a number by the multiplier
        """
        return n * multiplier
    return multiply
